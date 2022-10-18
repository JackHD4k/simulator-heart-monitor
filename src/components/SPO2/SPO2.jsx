import './SPO2.css'

function SPO2() {
  return (
    <div className='container_spo2'>
      <div className='spo2_monitor'>
        <svg className='svg_spo2' viewBox='-0.1 -2.60 15 3'>
          <path className='line2' d="M0 0 .3-1.9.5-2.2 1.7 0 1.9-1.4 2.4-1.7 3.3-.1 3.7-2.1 4-2.2 5.1 0 5.4-2.2 5.6-2.2 6.7 0 7-.1 7.2-2.1 8.3.1 8.7 0 8.9-2.2 9.2-2.2 10.2-.1 10.5-.1 10.6-2.1 10.8-2.2 11.7 0 12 0 12.3-2.3 13.5 0 13.8-.1 14-2.3 14.2-2.3 15 0M15 0 15.3 0 15.4-2.2 15.9-2.2 16.9 0 17.2 0 17.3-2.3 17.7-2.2 18.5-.1 18.8-.2 19-2.4 19.3-2.4 20-.1 20.3-.2 20.5-2.5 20.8-2.5 21.7-.2 22-.3 22.1-2.3 22.4-2.3" />
        </svg>
      </div>

      <div className='info_spo2'>
        <h1 className='texto_spo2'>99<span>%</span></h1>
        <span class="material-icons favspo2">bloodtype</span>
      </div>
    </div>
  )
}

export default SPO2