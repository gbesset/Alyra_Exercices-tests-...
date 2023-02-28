pragma solidity 0.8.9;

contract auction {
    address highestBidder;
    uint highestBid;
    mapping(address => uint) refunds;           //Mise en place d'un mapping

    function bid() payable external {
        require(msg.value >= highestBid);

        if (highestBidder != address(0)) {
            refunds[highestBidder] += highestBid; // met a jour le mapping pour claim
        }

        highestBidder = msg.sender;
        highestBid = msg.value;
    }

    function withdrawRefund() external {            //fonction dédiée pour claim money
        uint refund = refunds[msg.sender];
        refunds[msg.sender] = 0;            // /!\ reentrency !!
        (bool success, ) = msg.sender.call{value:refund}("");
        require(success);
    }
}
