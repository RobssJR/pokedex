import userEvent from "@testing-library/user-event";
import TextBox from "./index";
import { render, screen } from "@testing-library/react";

describe("<TextBox />", () => {
    test("render with placeholder Pokemon", () => {
        render(<TextBox placeholder="pokemon"/>);
        expect(screen.getByRole("textbox")).toHaveAttribute("placeholder", "pokemon");
    })

    test("call function on change value", () => {
        const fn = jest.fn();
        render(<TextBox placeholder="pokemon" onChange={fn}/>);

        userEvent.type(screen.getByRole("textbox"), "pikachu")

        expect(fn).toBeCalled();
    })
})