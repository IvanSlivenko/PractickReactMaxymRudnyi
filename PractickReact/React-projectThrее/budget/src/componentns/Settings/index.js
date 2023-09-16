import { useContext ,useCallback, memo } from "react";

import { AppContext } from "../../providers/context";

const Test = ({onClick}) => { 
    console.log('rendering');
    return<button onClick={onclick}>Click me!</button>
}

const Setting = () => {

    const { state, dispatch } = useContext(AppContext);
    
    const onChange = (e) => {

        const { value } = e.target;
        dispatch({
            type: 'changeCurrency',
            currency: value
        })
    }

    const onClick = () => {
        console.log('Parent click');

    };
    
    return (
        <>
            <h1>Налаштування</h1>
            <Test onClick={onClick} />
            <div>
                <form>
                    <label>
                        Валюта:
                        <select
                            name="currency"
                            value={state.currency}
                            onChange={onChange}>
                            <option value="UAH">Гривня</option>
                            <option value="USD">Долар США</option>
                            <option value="EUR">Євро</option>
                            <option value="CNY">Юань</option>
                        </select>
                    </label>
                </form>
            </div>
        </>
    );
};
    


export default Setting;    
   


