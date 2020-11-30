pragma solidity >=0.5.0 <0.8.0;
import "../base/GnosisSafeStateReader.sol";
contract TestReader {
    using GnosisSafeReader for GnosisSafe;
	function checkOwner(GnosisSafe safe, address owner) public returns(bool) {
        return safe.checkOwner(owner);
    }
}