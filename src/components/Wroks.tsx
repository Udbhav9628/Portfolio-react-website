import '../style.css'
import styled from "styled-components";
const line = require('../img/line.png')
const Project_Data = [
    {
        Name: "Clash Hub",
        Modal: line
    },
    {
        Name: "Video Chess",
        Modal: line
    },
    {
        Name: "Notes Book",
        Modal: line
    },
    {
        Name: "News Book",
        Modal: line
    },
]

const ListItem = styled.li`
  cursor: pointer;
  font-size: 3.5rem;
  font-weight: bold;
  color: transparent;
  -webkit-text-stroke: 0.2px white;
  position: relative;

  ::after{
    content: "${(props: { text: any }) => props.text}";
    position: absolute;
    left : 0%;
    color :	#ffc0cb;
    width : 0%;
    overflow:hidden;
    white-space: nowrap;
  }

  &:hover{
    ::after{
        animation: moveText 0.5s linear both;

        @keyframes moveText {
            to{
                width : 100%;
            }
        }
    }
  }
`;

const Wroks = () => {
    return (
        <div className='worksContainer'>
            <div className="WorksmainContent">
                <div id="Works_mainContentLeft">
                    <ul className='WorksList'>
                        {Project_Data.map((Item) => {
                            return (
                                <>
                                    <ListItem text={Item.Name} key={Item.Name}>{Item.Name}</ListItem>
                                </>
                            )
                        })}
                    </ul>
                </div>
                <div id="Works_mainContentRight">

                </div>
            </div>
        </div>
    )
}

export default Wroks