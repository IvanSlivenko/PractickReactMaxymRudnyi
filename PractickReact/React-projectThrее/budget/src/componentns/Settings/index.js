import { useContext ,useMemo,useCallback, memo } from "react";

import { AppContext } from "../../providers/context";

const Test = memo(({data}) => { 
    console.log('rendering');
    return <div>{JSON.stringify(data)}</div>
})

const Setting = () => {

    const { state, dispatch } = useContext(AppContext);
    
    const onChange = (e) => {

        const { value } = e.target;
        dispatch({
            type: 'changeCurrency',
            currency: value
        })
    }

   
    
    const data = useMemo(()=>[2],[]);

    return (
        <>
            <h1>Налаштування</h1>
            <Test data={data} />
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
   


