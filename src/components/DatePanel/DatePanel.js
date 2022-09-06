import { formatDate } from '../../common/commonFunctions';
import './DatePanel.css';

const DatePanel = () => {
    return (
        <div className='date'>
            {formatDate(new Date())}
            {/* {console.log('Todo List App')} */}
        </div>
    )
}

export default DatePanel;