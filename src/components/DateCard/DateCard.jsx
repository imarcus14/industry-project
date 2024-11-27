import './DateCard.scss'

import { Button } from '../Button/Button'

export function DateCard({ date, handleClick }) {
    return (
        <div className='date-card'>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M8.25 3.75V2.5H9.75V3.75H14.25V2.5H15.75V3.75H19C19.9665 3.75 20.75 4.5335 20.75 5.5V14C20.75 14.1989 20.671 14.3897 20.5303 14.5303L14.5303 20.5303C14.3897 20.671 14.1989 20.75 14 20.75H7C4.92893 20.75 3.25 19.0711 3.25 17V5.5C3.25 4.5335 4.0335 3.75 5 3.75H8.25ZM8.25 5.25H5C4.86193 5.25 4.75 5.36193 4.75 5.5V8.25H19.25V5.5C19.25 5.36193 19.1381 5.25 19 5.25H15.75V6.5H14.25V5.25H9.75V6.5H8.25V5.25ZM19.25 9.75H4.75V17C4.75 18.2426 5.75736 19.25 7 19.25H12.75V16.5C12.75 14.4289 14.4289 12.75 16.5 12.75H19.25V9.75ZM18.6893 14.25H16.5C15.2574 14.25 14.25 15.2574 14.25 16.5V18.6893L18.6893 14.25Z" fill="#131313" />
            </svg>
            <p className='date-card__date'>{date}</p>
            <p className='date-card__time'>1:00pm - 4:00pm</p>
            <Button style='primary' classModifier='check-out' text='Add experience' handleClick={handleClick} />
        </div>
    )
}