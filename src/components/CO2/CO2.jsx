import './CO2.css'

function CO2() {
  return(
    <div className="container_co2">
      <div className='co2_monitor'>
        <svg className='svg_co2' viewBox='-0.1 -3.80 22 4.35'>
          <path className='line3' d="M0 0C.1667-1.0667 0-3.2.5-3.2 2.9-3.7 1.5-1.0667 2 0L3.6 0C4.0667-1 3.2-3 5.1-3 6.7-3 5.9-.9 6.8 0 8.3.5 7.4-2.9 8.3-3.1 11.2-3.8 9.3-.2 10.8 0 12.1.3 11.2-3.1 12-3.2L13.2-3.2C14.2-2.3 13.2.2 14.4.1 15.5.2 14.5-3.1 15.6-3.1L16.9-3.1C18.1-2.3 16.9-.1 18.1 0 19.4.3 18.5-3.2 19.5-3.1L20.8-3.1C21.5-2.3 20.8-.2 21.9 0L22.5 0" />
        </svg>
      </div>

      <div className='info_co2'>
        <h1 className='texto_co2'>99<span>%</span></h1>
        <span class="material-icons favco2">co2</span>   
      </div>

    </div>
  )
}

export default CO2