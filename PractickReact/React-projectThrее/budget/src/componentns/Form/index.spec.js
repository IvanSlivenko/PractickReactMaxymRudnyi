import React from "react";
import { shallow } from 'enzyme';
import Form from ".";

describe('Form component', () => {
    let props;
    let sut;

    beforeEach(() => {
        props = {
            onChange: jest.fn()
        }

        sut = shallow(<Form {...props} />);
    })

    describe('when edit form', () => {
        it("should change value input", () => {
       
            const input = sut.find('Input[name="value"]').at(0);
            input.simulate("change", { target: { value: '123' } });
            
            sut.update();

            const { value } = input.props();
            expect(value).toBe('123');
        })          
    })
})