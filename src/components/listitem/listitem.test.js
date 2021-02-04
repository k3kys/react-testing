import React from 'react';
import { shallow } from "enzyme"
import { findByTestAtrr, checkProps } from "../../../Utils/index"
import ListItem from "./index"

describe("ListItem Component", () => {
    describe("Checking PropTypes", () => {
        it("Should not throw a warning", () => {
            const expectedProps = {
                title: "Example Title",
                desc: "Some text"
            }
            const propsErros = checkProps(ListItem, expectedProps)
            expect(propsErros).toBeUndefined()
        })
    })

    describe("Component Renders", () => {
        let wrapper
        beforeEach(() => {
            const props = {
                title: "Example Title",
                desc: "Some text"
            }
            wrapper = shallow(<ListItem {...props}/>)
        })

        it("Should renders without error", () => {
            const component = findByTestAtrr(wrapper, "listItemComponent")
            expect(component.length).toBe(1)
        })

        it("Should render a title", () => {
            const title = findByTestAtrr(wrapper, "componentTitle")
            expect(title.length).toBe(1)
        })

        it("Should render a desc", () => {
            const desc = findByTestAtrr(wrapper, "componentDesc")
            expect(desc.length).toBe(1)
        })
    })

    describe("Should not render", () => {
        let wrapper
        beforeEach(() => {
            const props = {
                desc: "Some text"
            }
            wrapper = shallow(<ListItem {...props}/>)
        })

        it("Component is not rendered", () => {
            const component = findByTestAtrr(wrapper, "listItemComponent")
            expect(component.length).toBe(0)
        })
    })
})