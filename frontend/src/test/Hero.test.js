import React from "react";
import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom';
import { MemoryRouter } from "react-router-dom";
import Hero from "../landing_page/home/Hero";

// Test Suite

describe("home ke hero ko test karo " , ()=>{
    test("render karo hero ke image ko ",()=>{
        render(<MemoryRouter><Hero/></MemoryRouter>);
        const heroImage = screen.getByAltText("Trade2Day portfolio dashboard preview");
        expect(heroImage).toBeInTheDocument();
        expect(heroImage).toHaveAttribute("src","media/image/HomeHero.svg")
        });

    test("render karo hero ke signup button ko  ",()=>{
        render(<MemoryRouter><Hero/></MemoryRouter>);
        const signupButton = screen.getByRole("button", {name:"Start investing"});
        expect(signupButton).toBeInTheDocument();
        expect(signupButton).toHaveClass("btn btn-primary mb-5");
        });
});