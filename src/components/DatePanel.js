import { formatDate } from '../common/commonFunctions';

const DatePanel = () => {
    return (
        <div>
            {formatDate(new Date())}
            {console.log('Todo List App')}
        </div>
    )
}

export default DatePanel;