import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Robot from "../assets/Robot.gif";
export default function Welcome() {
    const [userName, setUserName] = useState("");
    useEffect(() => {
    const fetchUserName = async () => {
        const data = await JSON.parse(localStorage.getItem("chat-app-user"));
        setUserName(data.username);
    };

    fetchUserName();
    }, []);

    return (
        <Container>
            {/* console.log({username}) */}
            <img src={Robot} alt="Robot" />
            <h1>
                Welcome, <spam>{userName}!</spam>
            </h1>
            <h3>Please select a chat to start messaging.</h3>
        </Container>
    );
}

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    flex-direction: column;
    img {
    height: 20rem;
    }
    span {
        color: #f8e559;
    }
    h3{
        color: #f8e559;
    }
`;