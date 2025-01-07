"use client";
import React from "react";
import styled from "styled-components";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
`;

const KaraokeList = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 20px;
    width: 100%;
    padding: 20px;
`;

const KaraokeItem = styled.div`
    padding: 10px;
    border: 1px solid #ccc;
    display: flex;
    flex-direction: column;
`;

const KaraokeTitle = styled.h2`
    font-size: 1.5em;
    color: #333;
`;

const KaraokeDescription = styled.p`
    font-size: 1em;
    color: #666;
`;

const Homepage: React.FC = () => {
    return (
        <Container>
            <KaraokeList>
                <KaraokeItem>
                    <KaraokeTitle>Sample Video 1</KaraokeTitle>
                    <KaraokeDescription>
                        This is a description for sample video 1.
                    </KaraokeDescription>
                </KaraokeItem>
                <KaraokeItem>
                    <KaraokeTitle>Sample Video 2</KaraokeTitle>
                    <KaraokeDescription>
                        This is a description for sample video 2.
                    </KaraokeDescription>
                </KaraokeItem>
                <KaraokeItem>
                    <KaraokeTitle>Sample Video 2</KaraokeTitle>
                    <KaraokeDescription>
                        This is a description for sample video 2.
                    </KaraokeDescription>
                </KaraokeItem>
                <KaraokeItem>
                    <KaraokeTitle>Sample Video 2</KaraokeTitle>
                    <KaraokeDescription>
                        This is a description for sample video 2.
                    </KaraokeDescription>
                </KaraokeItem>
                <KaraokeItem>
                    <KaraokeTitle>Sample Video 2</KaraokeTitle>
                    <KaraokeDescription>
                        This is a description for sample video 2.
                    </KaraokeDescription>
                </KaraokeItem>
                <KaraokeItem>
                    <KaraokeTitle>Sample Video 2</KaraokeTitle>
                    <KaraokeDescription>
                        This is a description for sample video 2.
                    </KaraokeDescription>
                </KaraokeItem>
            </KaraokeList>
        </Container>
    );
};

export default Homepage;
