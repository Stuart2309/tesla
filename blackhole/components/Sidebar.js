import styled from "styled-components";
import {Avatar, Button, IconButton} from "@material-ui/core";
import ChatIcon from "@material-ui/icons/Chat";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import SearchIcon from "@material-ui/icons/Search";

function Sidebar(){

const createChat = () => {
    const input = prompt("pls enter an email address of the person u wish to chat");
    if(!input) return null;
    
};
    return (
        <Container>
            <Header>
                <UserAvatar />

                <IconContainer>
                    <IconButton>
                        <ChatIcon/>
                    </IconButton>
                    <IconButton>
                        <MoreVertIcon/>
                    </IconButton>
                </IconContainer>
            </Header>
            <Search>
                <SearchIcon/>
                <SearchInput placeholder="Search in chats"/>
            </Search>
            <SidebarButton onClick={createChat}>
                Start a New Chat
            </SidebarButton>

            {/*list chat */}
        </Container>
    )
}

export default Sidebar

const Container = styled.div`
       
`
const Search = styled.div`
    display:flex;
    align-items:center;
    padding:20px;
    border-radius:2px;
`
const SidebarButton = styled(Button)`
    width:100%;

    &&&{
        border-top: 1px solid whitesmoke;
        border-bottom: 1px solid whitesmoke;
     }
`
const SearchInput = styled.input`
    background-color:white;
    color:black;
    outline-width:0;
    border:none;
    flex:1;

`

const Header = styled.div`
    display: flex;
    position: sticky; 
    top:0;
    background-color: white;
    z-index:1;
    justify-content:space-between;
    align-items:center;
    padding:15px;
    height:80px;
    border-bottom: 1px solid whitesmoke;

`

const UserAvatar = styled(Avatar)`
    cursor: pointer;
    :hover{
        opacity:0.8;
    }
`

const IconContainer = styled.div``