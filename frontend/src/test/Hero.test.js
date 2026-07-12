import React from "react";
import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom';
import Hero from "../landing_page/home/Hero";

// Test Suite

describe("home ke hero ko test karo " , ()=>{
    test("render karo hero ke image ko ",()=>{
        render(<Hero/>);
        const heroImage = screen.getByAltText("hero image");
        expect(heroImage).toBeInTheDocument();
        expect(heroImage).toHaveAttribute("src","media/image/HomeHero.svg")
        });

    test("render karo hero ke signup button ko  ",()=>{
        render(<Hero/>);
        const signupButton = screen.getByRole("button");
        expect(signupButton).toBeInTheDocument();
        expect(signupButton).toHaveClass("btn btn-primary mb-5");
        });
});