
const Balance = ({balance, children}) => {
    return (
        <div>
           
            {balance === 0 ? 'Повний нуль' : balance < 0 ? 'Зайшли в мінус' : 'Ми в плюсі'}
            {balance}
        </div>
    );
}
 
export default Balance;

