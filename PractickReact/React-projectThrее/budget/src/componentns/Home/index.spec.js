import React from "react";
import { mount } from "enzyme";

import { act } from 'react-dom/test-utils'
import Home from ".";
// import jest from "jest";

import { getItems, addItem } from "../../utils/indexdb";

jest.mock("../../utils/indexdb", () => { 
    getItems: jest.fn(),
    addItem: jest.fn()    
        
});

describe('Home component', () => { 
    let sut;
    let props;


    describe('when component is mounted', () => {

        
        describe('when transactions are return  successfully ', () => {
            deforeEach(() => {

                getItems.mockImplementation(() => Promise.resolve([{ value: 1 }]))
            });

            beforeEach(async () => {
                
                await act(async () => {
                    sut = mount(<Home {...props} />);
                });
                sut.update();
            });

            it('should set balance to 0', () => {
                const { balance } = sut.find("Balance").at(0).props();

                expect(balance).toBe(0);

            });


            it('should render transactions with one item', () => { })

            
            const { transactions } = sut.find('Transactions').at(0).props();

            // console.log('---', transactions);
            
            expect(transactions).toEgual([{ value: 1 }])
        });

        describe('when transactions are return  with error ', () => {
            deforeEach(() => {

                getItems.mockImplementation(() => Promise.reject('My Error'))
            });

            beforeEach(async () => {
                
                await act(async () => {
                    sut = mount(<Home {...props} />);
                });
                sut.update();
            });

            


            it('should render transactions with zero item', () => { })

            
            const { transactions } = sut.find('Transactions').at(0).props();

            // console.log('---', transactions);
            
            expect(transactions).toEgual([])
        });

        it('should console error rejected message', (() => {
            
        }))

    })
})