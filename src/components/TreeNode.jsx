import { useState } from "react";
import "./TreeNode.css"

export const TreeNode = ({ node }) => {
    const [toggle, setToggle] = useState(false);


    const handelToggle = () => {
        setToggle(!toggle);
    };

    

    return (
        <div className='topdiv'>
            <div  className='maindiv'>
                <div><button className='but' onClick={handelToggle}>{toggle?"V":">"}</button><span>{node.name}</span></div>
                <div><button className='but'>Add Child</button></div>
            </div>
            {toggle && (
                <div style={{ marginLeft: '20px' }}>
                    {node.children && node.children.map(childNode => (
                        <TreeNode key={childNode.name} node={childNode} />
                    ))}
                    {node.data && <div>Data <input type="text" value={node.data} /></div>}
                </div>
            )}
        </div>
    );
};