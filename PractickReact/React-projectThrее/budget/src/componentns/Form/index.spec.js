import React from "react";
import { shallow } from 'enzyme';
import Form from ".";

describe('Form component', () => {
    let props;
    let sut;

    beforeEach(() => { 

//const mockDate = new Date(1466424490000);
        const spy = jest
            .spyOn(global, "Date")
            .mockImplementation(() => ({
                toISOString: () =>  '10.10.10'
        }))

        })

    beforeEach(() => {
        props = {
            onChange: jest.fn()
        }

        sut = shallow(<Form {...props} />);
    })

    describe('when edit form', () => {
        it("should change value input", () => {
       
            let input = sut.find('Input[name="value"]').at(0);
            input.simulate("change", {
                target: {
                    value: '123',
                    name: 'value'
                }
            });
            sut.update();
            input = sut.find('Input[name="value"]').at(0);

            const props = input.props();
            expect(props.value).toBe('123');
        })
        
        it("should change comment input", () => {
            const expectedResult = "comment value";
            let input = sut.find('Comment[name="comment"]').at(0);
            input.simulate("change", {
                target: {
                    value: 'comment value',
                    name: 'comment',
                },
            });
            sut.update();
            input = sut.find('Comment[name="comment"]').at(0);

            const { value } = input.props();
            expect(value).toBe(
                expectedResult);
        });
    });

    describe('when user submit form', () => { 
        it('should call onChange form the props', () => {
            const form = sut.fid('form');
            form.simulate('submit', {
                preventDefault: jest.fn()
            });
            expect(props.onChange).toHaveBeenCalledTimes(1);
         })
    })
})