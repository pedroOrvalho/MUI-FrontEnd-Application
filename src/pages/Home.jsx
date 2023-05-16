import React from "react";
import { Link } from "react-router-dom";
import { Stack, Button, styled } from "@mui/material";
import { yellow } from "@mui/material/colors"

const ColorButton = styled(Button)(({ theme }) => ({
    color: theme.palette.getContrastText(yellow[500]),
    backgroundColor: yellow[500],
    "&:hover": {
        backgroundColor: yellow[700],
    },
}));

export default function Home() {
    return (
        <div className="home_container">
            <div className="home-content">
                <h1>Thinking about travelling soon?</h1>
                <h2>Let us help you with it</h2>
                <p>They are amazing countries to visit, so if you're thinking of travelling check out all the important information and fun facts about each country</p>
                <Link className="home_button" to="/countries">
                <Stack spacing={2} direction="row">
                <ColorButton variant="contained">Press here to view countries</ColorButton>
                </Stack>
                </Link>
            </div>
        </div>
    );
}