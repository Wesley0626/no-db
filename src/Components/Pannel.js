import React from 'react'
import './pannel.css'

function Pannel(){
  return(
    <nav className="links">
      <div className='linkContainer'>
        <h2 className='head'>Store Locators</h2>
        <a href="https://www.harmonsgrocery.com/flowershop?gclid=EAIaIQobChMI0MPRtJiU4wIVwhd9Ch3dqw7-EAAYASAAEgLOF_D_BwE#/!store-locations" className='link' target="_blank">Harmons</a>
        <a href="https://www.smithsfoodanddrug.com/stores/search?&cid=ps_adw_ogs.locator_t:smiths+store+locator&gclid=EAIaIQobChMIhZaryZKU4wIVk7fsCh0vwgUlEAAYASAAEgIqkPD_BwE&gclsrc=aw.ds" className='link' target="_blank">Smith's</a>
        <a className='link' href='https://www.walmart.com/store/finder?location=84119&distance=50' target="_blank">Walmart</a>
        <a className='link' href="https://www.costco.com/warehouse-locations?langId=-1&storeId=10301&catalogId=10701" target="_blank">Costco</a>
        <a className="link" href="https://maceys.com/all" target="_blank">Maceys</a>
        <a className="link" href="https://locations.traderjoes.com/" target="_blank">Trader Joe's</a>
        <a className="link" href="http://www.goodearthnaturalfoods.com/ret_store_locator.asp?storeID=PJ102JRNHNGT8G0QMPEQ7LDC7GX6C2W2" target="_blank">Good Earth</a>
        <a className="link" href="https://shopridleys.com/choose.php" target="_blank">Ridley's</a>
      </div>
  </nav>
  )
}

export default Pannel