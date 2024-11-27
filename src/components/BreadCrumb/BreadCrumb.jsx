import './BreadCrumb.scss'

export function BreadCrumb({ tabs }) {
    return (
        <div className='breadcrumb'>
            {tabs.map((tab, index) => (
                <div key={index} className='breadcrumb__container'>
                    <span className='breadcrumb__tab'>{tab}</span>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className='breadcrumb__icon'><path fill="none" d="m12 4 11.3 11.3a1 1 0 0 1 0 1.4L12 28"></path></svg>
                </div>
            ))}
        </div>
    )
}