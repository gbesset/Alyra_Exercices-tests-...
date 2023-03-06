import { useRef, useEffect } from "react";

function Contract({ value, text }) {
  const spanEle = useRef(null);
 
  useEffect(() => {
    spanEle.current.classList.add("flash");
    const flash = setTimeout(() => {
      spanEle.current.classList.remove("flash");
    }, 300);
    return () => {
      clearTimeout(flash);
    };
  }, [value,text]);

  
  return (
    <code>
      {`contract SimpleStorage {
      uint256 value = `}

      <span className="secondary-color" ref={spanEle}>
        <strong>{value}</strong>
      </span>

      {`;
       string greeter = `}

       <span className="secondary-color" ref={spanEle}>
         <strong>{text}</strong>
       </span>
 
       {`;

  function read() public view returns (uint256) {
    return value;
  }

  function write(uint256 newValue) public {
    value = newValue;
  }


  function greet() public calldata returns (string memory _greeter) {
    return _greeter;
  }

  function setGreet(string memory _greeter) public {
    greeter = _greeter;
  }
}
`}
    </code>
  );
}

export default Contract;
