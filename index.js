document.addEventListener('DOMContentLoaded', function(){
const req = new XMLHttpRequest();
req.open("GET",'data.json',true);
req.send();
req.onload = function(){
const json = JSON.parse(req.responseText);

//<!-- INJECT NAVIGATOR -->
    const injectNavigator = () => {
      let navigator = `<div class="nav"><section class="nav-logo">         
      <img id="logo"class="logo" src="ratv_media/ratv_logo/ratv_logo.png"></section> 
       <div class="navigator-container"> 
        <input type="text" id="explore-search"class="explore-search-bar" autocapitalize="off" autocomplete="on" placeholder="🔎search..."/>
       </div>`
    document.querySelector('#nav-parent').innerHTML= navigator}
    injectNavigator()
    
    
//<!-- INJECT ABOUT PAGE -->
    const injectAbout = () => {
      let html = `<div class="legal">
      <h1>What is rope access? </h1>
      <p>Rope access (or industrial climbing) is a form of work positioning which applies practical ropework to allow workers to access difficult-to-reach locations without the use of scaffolding, cradles or an aerial work platform.</p>
        <h1>RopeAccessTv</h1>
       <p>RopeAccessTv (@ropeaccesstv) is a London based Rope Access company.</p>
       </div>
       <div class="instagram-feed">
       <iframe src="https://www.instagram.com/p/B3U2w9ToDjl/embed/captioned" width="220" height="325" frameborder="0" scrolling="no" allowtransparency="true"></iframe>
       <iframe src="https://www.instagram.com/p/B9L71xdBCB2/embed/captioned" width="220" height="325" frameborder="0" scrolling="no" allowtransparency="true"></iframe>
       <iframe src="https://www.instagram.com/p/B6qlRObBO_0/embed/captioned" width="220" height="325" frameborder="0" scrolling="no" allowtransparency="true"></iframe>
       <iframe src="https://www.instagram.com/p/By0jz7rAjX9/embed/captioned" width="220" height="325" frameborder="0" scrolling="no" allowtransparency="true"></iframe> 
       <iframe src="https://www.instagram.com/p/BydOD23hJYZ/embed/captioned" width="220" height="325" frameborder="0" scrolling="no" allowtransparency="true"></iframe> 
       <iframe src="https://www.instagram.com/p/Bx0KzRLh0FE/embed/captioned" width="220" height="325" frameborder="0" scrolling="no" allowtransparency="true"></iframe> 
       <iframe src="https://www.instagram.com/p/BwKSfIYhaFp/embed/captioned" width="220" height="325" frameborder="0" scrolling="no" allowtransparency="true"></iframe> 
       <iframe src="https://www.instagram.com/p/BwCswuboL-W/embed/captioned" width="220" height="325" frameborder="0" scrolling="no" allowtransparency="true"></iframe>
        </div>`
     document.querySelector('#explore-left').innerHTML= html;
    scrollToTop()}
    document.querySelector("#about-page").onclick = injectAbout

//<!-- INJECT TERMS -->
     const injectTerms = () => {
      let html =
     `<div class="legal"><h1>PLEASE READ THESE TERMS AND CONDITIONS CAREFULLY BEFORE YOU USE THIS WEBSITE.</h1>
     <p>By using this website, you agree to the following terms and conditions of use. If you do not accept any of them, you should exit this Website now. If you purchase products or services through this Website, terms and conditions will apply to this transaction and you should read these terms and conditions carefully.</p>
      <h1>The Website</h1>
      <p>This web page represents our Terms of Use and Sale (”Agreement”) regarding our website, ropeaccess.tv (”Website”). The terms, ”we” and ”our” as used in this Agreement refer to ropeaccess.tv . Access to the Website is permitted on a temporary basis, and ropeaccess.tv reserves the right to withdraw or amend the service provided on the Website without notice. ropeaccess.tv will not be liable if for any reason the Website is unavailable at any time or for any period. ropeaccess.tv aims to update the Website regularly, and may change the content at any time. If the need arises, ropeaccess.tv may suspend access to the Website.</p>
      <h1>Ownership of Content</h1>
      <p>The copyrights in and to all Content remain with ropeaccess.tv.</p>
      <h1>Copyright</h1>
      <p>All content included on this site, such as text, graphics, logos, button icons, images, audio clips, digital downloads, data compilations, is the property of ropeaccess.tv and protected by international copyright laws. The compilation of all content on this site is the exclusive property of ropeaccess.tv and protected by international copyright laws. ropeaccess.tv grants you a non-exclusive, non-transferable, revocable license to access and use our Website in order for you to make purchases of the movies and related services through our Website, strictly in accordance with our Legal Terms.</p>
      <h1>Ropeaccess.tv Non-Exclusive Licenses</h1>
      <p>In consideration of your purchase, you hereby agree to pay ropeaccess.tv a certain license fee according to our website rates. Previews of Recordings are available for download on the ropeaccess.tv website.</p>
      <h1>License Terms</h1>
      <p>By downloading Works from our website, you agree to be bound by the terms of this Agreement in respect to those Works. If you do not accept or agree with these terms, do not download Works of the Licensor. In this Agreement you are referred to as Licensee.
      <p>1. You acknowledge that each digital copy of a video (individually and collectively referred to as the “Works”) is the property of Licensor. If you are entering this Agreement on behalf of an organization, entity, or company, then that entity is bound to the license granted and the restrictions and limitations detailed herein (and such entity or organization is included in the term “Licensee”) regardless of your future employment and/or relationship with such entity.
      <p>2. You affirm that you are either more than 18 years of age, or an emancipated minor, or possess legal parental or guardian consent, and are fully able and competent to enter into the terms, conditions, obligations, affirmations, representations, and warranties set forth in these Terms of use, and to abide by and comply with these Terms of Service. In any case, you affirm that you are over the age of 13, as the Service is not intended for children under 13. If you are under 13 years of age, then please do not use the Service.</p> 
      <p>3. The Works and accompanying materials (if applicable) are provided “as is” without representation, warranty or condition of any kind, either express or implied, including, but not limited to the implied representations, warranties or conditions of merchantability, or fitness for a particular purpose. Licensor does not represent or warrant that the Works will meet your requirements or that its use will be uninterrupted or error free. The entire risk as to the quality and performance of the Works is with you. Should the Works prove defective, you, and not licensor, assume the entire cost of all necessary corrections. Licensor represents and warrants that it has the full right, power, and authority to enter into this agreement and to grant the rights herein.</p>
      <p>4. LICENSOR’S entire liability and your exclusive remedy, with respect to any claims arising out of your use of the Works or accompanying material (if applicable), or out of your actions in downloading such, shall be as follows:</p>
      <p>You may, upon request to Licensor, be permitted to download the Works again, at a location Licensor will provide for you. If you continue to be unable to download the Works, Licensor will refund the fee actually paid by you in respect of the use of such Works, provided Licensor determines in its sole and absolute discretion that you have been unable to download such Works successfully.</p>
      <p>5. In no event shall licensor or any of its directors, officers, employees, shareholders, partners, or agents be liable for any incidental, indirect, punitive, exemplary, or consequential damages whatsoever (including damages for loss of profits, interruption, loss of business information, or any other pecuniary loss) in connection with any claim, loss, damage, action, suit or other proceeding arising under or out of this agreement, including without limitation your use of, reliance upon, access to, or exploitation of the Works, or any part thereof, or any rights granted to you hereunder, even if we have been advised of the possibility of such damages, whether the action is based on contract, tort (including negligence), infringement of intellectual property rights or otherwise.</p>
      <p>6. The parties to this Agreement are independent contractors. Nothing in this Agreement will create any partnership, joint venture, agency, franchise, sales representation, or employment relationship between the parties. Neither party has authority to make or accept any offers or representations on behalf of the other party.</p>
      <p>7. This Agreement sets forth the entire agreement between the parties and supersedes any and all prior proposals, agreements or communications, written or oral, of the parties with respect to the subject matter herein.</p>
      <p>8. No failure or delay by either party in exercising any right hereunder will operate as a waiver thereof.</p>
      <p>9.  Any attempt by Licensee to assign this Agreement other than as permitted above will be null and void. This Agreement shall be binding upon and inure to the benefit of the parties and their respective successors and permitted assigns.</p>
      <p>10. If any provision of this Agreement is found to be invalid or unenforceable by an arbitrator or a court of competent jurisdiction, the remaining portions shall remain in full force and effect.</p>
      <p>11. This Agreement shall be governed by and construed under the international copyright law without regard to any conflict of law provision. This Agreement is performable in whole or in part.</p>
      <p>12. YOU ACKNOWLEDGE THAT YOU HAVE READ THIS AGREEMENT, UNDERSTAND IT, AND AGREE TO BE BOUND BY ITS TERMS AND CONDITIONS. YOU FURTHER AGREE THAT IT IS THE COMPLETE AND EXCLUSIVE STATEMENT OF THE AGREEMENT BETWEEN YOU AND ROPEACCESS.TV, WHICH SUPERSEDES PROPOSAL OR PRIOR AGREEMENT, ORAL OR WRITTEN, AND ANY OTHER COMMUNICATION (IF ANY).</p>
      </div>`
          document.querySelector('#explore-left').innerHTML= html;
    scrollToTop()}
    document.querySelector("#terms2").onclick = injectTerms
     
//<!-- INJECT SALES AGREEMENT -->
    const injectSalesAgreement = () => {
          let html =
          `<div class="legal"> 
          <p>This sale agreement is made on 25th of January, 2020 between “Ropeaccess.tv - Italy" and Company Inc., 1600 Pennsylvania Avenue NW, Washington, DC 20500, USA herein "client" for the purchase of the footage "PWNJJ54".</p>
          <p>This agreement, available on the website, shall be carefully read by the client before the completion of a Product purchase processs on ropeaccess.tv.</p>
          <p>Ropeaccess.tv sells in favor of the client who purchases the products selected and ordered from those found on the website ropeaccess.tv and available at the time. The client declares and guarantees that the usage of the products bought on ropeaccess.tv is strictly for only under fair use right and indemnify and hold harmless ropeaccess.tv from any and all claims and liability resulting from any and all third party claims of copyright infringement. Except as set forth in the foregoing sentence, ropeaccess.tv makes no other warranty.</p> 
          <h1>IT IS HEREBY AGREED</h1>
          <p><strong>1.0 Subject of this agreement</strong></p>
          <p>1.1 By virtue of this agreement ropeaccess.tv sells and the client respectively receives at a distance the Products indicated and offered up for sale on ropeaccess.tv.</p>
          <p>1.2 The purpose of this agreement is for the establishment of the rights and obligations of the parties in relation to the sale of the products by ropeaccess.tv to the client. These rights and obligations are applicable without any exception to all sales completed on ropeaccess.tv.</p>
          <p><strong>2.0 Stipulation of this agreement</strong></p>
          <p>2.1 This agreement between ropeaccess.tv and client can only be stipulated through ropeaccess.tv, by the client accessing the website, where, following the indicated procedure, the client shall be guided to submitting the purchase request for Products.</p>
          <p><strong>3.0 Obligations of the client</strong></p>
          <p>3.1 The client shall pay for the price of products purchased.</p>
          <p>3.2 By submitting an order, the client declares that he/she has read all notifications provided during the purchase procedure and fully accept of this agreement. </p>
          <p><strong>4.0 Prices</strong></p>
          <p>4.1 The prices of the Products offered up for sale on ropeaccess.tv are applicable within the context of distant selling.</p>
          <p>4.2 All sale prices for products displayed and indicated on ropeaccess.tv are expressed and constitute an offer to the public.</p>
          <p><strong>5.0 Product Availability</strong></p>
          <p>5.1 ropeaccess.tv ensures the processing and delivering of orders received in the shortest time possible, depending on the workload of ropeaccess.tv</p>
          <p><strong>6.0 Termination</strong></p>
          <p>6.1 The obligations undertaken by the client and the guarantee of payment due by the client, are substantial obligations of this agreement; therefore, the parties expressly agree that, client default of any of these obligations, shall bring about legal termination of this agreement. </p>
          </div>`
          document.querySelector('#explore-left').innerHTML= html;
    scrollToTop()}
    document.querySelector("#sales-agreement").onclick = injectSalesAgreement

//<!-- SHUFFLE JSON -->
    function shuffle(array) {
    array.sort(() => Math.random() - 0.5)}
    shuffle(json)

//<!-- SCROLL TO TOP -->
    function scrollToTop() {
        window.scroll(0,0);
    }
    
//<!-- INJECY EMOJI -->
    const emoji = (categ) =>{
  if (categ === "Cleaning") {
    return "💧"
} else if (categ === "Construction") {
    return "🔨"
  } else if (categ === "Painting") {
    return "🖌️"
  } else if (categ === "People") {
    return "👷"
    }}

//<!-- INJECT CATEGORIES -->
/*
<
      */
    function injectCategories() {
    let html = `<input type="button" class="button-categories-remix" id="button-categories-remix" value="Home 🏠"></input>
    <input type="button" class="button-categories" id="button-categories-cleaning" value="Cleaning 💧"></input>
      <input type="button" class="button-categories" id="button-categories-construction" value="Construction 🔨"></input>
      <input type="button" class="button-categories" id="button-categories-painting" value="Painting 🧹"></input>
      <input type="button" class="button-categories" id="button-categories-people" value="People 👷"></input>
      <form class="hidden">
      <label for="categories"></label>
      <select style="padding: 10px;"id="categ" name="catego">
        <option value="" selected disabled >- Choose a Category-</option>
        <option value="Cleaning 💧">Cleaning 💧</option>
        <option value="Construction 🔨">Construction 🔨</option>
        <option value="Painting 🧹">Painting 🧹</option>
        <option value="People 👷">People 👷</option>
      </select>
    </form>`
    document.querySelector('#categories').innerHTML= html}
    injectCategories()

//<!-- INJECT THUMBS -->
    function injectThumbs() {
    let html = `<h1 style="display: flex; justify-content: center">Trending Videos</h1><div class="video-item">`
    json.slice(-20).forEach(function(val) {
    html += `<img data-id="${val.id}" data-category="${val.category}" data-video="${val.vd}"class="explore-video"src="${val.ph}">`})
    html += `</div>`
    document.querySelector('#explore-left').innerHTML= html;}
    injectThumbs()

//<!-- INJECT VIDEO -->
    function injectVideo() {
    let btn   = document.querySelectorAll(".explore-video")
    btn.forEach(function(button) {
          button.onclick = function() {
            scrollToTop()
            html = ""
            html+=`<!-- SECTION 02: REQ VIDEO -->
             
            <div class="video-content-req">
              <div class="modal-content-req">
                <video poster="ratv_media/ratv_gif.gif"id="videoTag-req" class="modal-body"controls playsinline autoplay muted loop>
                    <source id="sourceTag"src="${button.dataset.video}" type="video/mp4"></video></div>   
                <div class="modal-footer-req">
                
                
                
                    <form target="paypal" action="https://www.paypal.com/cgi-bin/webscr" method="post">
              <input type="hidden" name="cmd" value="_s-xclick">
              <input type="hidden" name="hosted_button_id" value="V29R2LRYLBAUW">
              <table>
              <tr><td><input type="hidden" name="on1" value="Item ID"><strong>Item ID</strong></td></tr><tr><td>
              <input type="text" name="os1" maxlength="200" readonly value="${button.dataset.id}"></td></tr>
              <tr><td><strong>Category</strong></tr></td>
              <tr><td><input readonly value="${button.dataset.category}${emoji(button.dataset.category)}"></input></td></tr>
              <tr><td><input type="hidden" name="on0" value="Quality"><strong>Quality</strong></td></tr><tr><td><select name="os0">
                <option value="HD 1080p">HD 1080p $25,00 USD</option>
              </select> </td></tr>
              <tr><td><input required checked id="terms"type="checkbox"></input>
              <label style="font-size: 14px;"for="terms">I have read the <a id="terms1"><u>terms and license</u></a></label></td></tr>
              </table>
              <input type="hidden" name="currency_code" value="USD">
              <input style="width: 170px;" type="image" src="https://raw.githubusercontent.com/ropeaccess/ropeaccess.github.io/master/media/add_to_cart.JPG" border="0" name="submit" alt="PayPal – The safer, easier way to pay online!">
              <img alt="" border="0" src="https://www.paypalobjects.com/it_IT/i/scr/pixel.gif" width="1" height="1">
              </form>

            
              </div></div></div>
              <div class="similar-content">Same category:${button.dataset.category} ${emoji(button.dataset.category)}</div>
              <div id="similar-content"></div><div></div>
              <div class="similar-content">More Categories 👇</div>
              <div id="other-content"></div><div></div>`
              document.querySelector('#explore-left').innerHTML= html
              document.querySelector("#terms1").onclick = injectTerms

    //<!-- INJECT VIDEO - SIMILAR CATEGORY -->
function shuffleSimilarCateg() {
  shuffle(json)
  const filter = json.filter(cat => cat.category === button.dataset.category);
  let filtered = `<div class="video-item">`
  filter.slice(-4).forEach(function(val) {
    filtered += `<img data-id="${val.id}" data-category="${val.category}" data-video="${val.vd}"class="explore-video"src="${val.ph}">`})
    filtered += `</div>`
  document.querySelector('#similar-content').innerHTML= filtered;}
      shuffleSimilarCateg()
      injectVideo()

//<!-- INJECT VIDEO - MORE CATEGORY --> 
function shuffleMoreCateg() {
      shuffle(json)
      const morecat = json.filter(cat => cat.category !== button.dataset.category);
        let filteredcat = `<div class="video-item">`
        morecat.slice(-8).forEach(function(val) {
          filteredcat += `<img data-id="${val.id}" data-category="${val.category}" data-video="${val.vd}"class="explore-video"src="${val.ph}">`})
          filteredcat += `</div>`
        document.querySelector('#other-content').innerHTML= filteredcat;}
      shuffleMoreCateg()
    injectVideo()}})}
    injectVideo()
      
//<!--REMIX BUTTON -->
    const remix = () =>{
      shuffle(json)
      injectThumbs()
    injectVideo()}
    document.querySelector("#button-categories-remix").onclick = remix
    document.querySelector("#logo").onclick = remix

//<!-- SEARCH BUTTON -->
    const search = document.querySelector("#explore-search")
    search.onkeyup = function(){
      shuffle(json)
      const value = this.value
      let filter = json.filter(cat => cat.category === value || cat.id === value);
        let html = `<div class="video-item">`
        filter.slice(-20).forEach(function(val) { 
          html += `<img data-id="${val.id}" data-category="${val.category}" data-video="${val.vd}"class="explore-video"src="${val.ph}">`
        })
        html += `</div>`
        document.querySelector('#explore-left').innerHTML= html;
    injectVideo();}

//<!-- SELECT CATEGORY IN MEDIA QUERY -->
    document.querySelector("#categ").addEventListener("change", function() {
    let index = this.options
    if (index.selectedIndex === 1) {
      injectCleaning()
    } else if (index.selectedIndex === 2) {
      injectConstruction() 
    } else if (index.selectedIndex === 3) {
      injectPainting() 
    } else if (index.selectedIndex === 4) {
    injectPeople()}})


//<!-- INJECT CATEGORY - CLEANING -->
    function injectCleaning(){
    shuffle(json)
    const filter = json.filter(cat => cat.category === 'Cleaning');
        let filtered = `<div class="video-item">`
        filter.slice(-20).forEach(function(val) {
          filtered += `<img data-id="${val.id}" data-category="${val.category}" data-video="${val.vd}"class="explore-video"src="${val.ph}">`})
          filtered += `</div>`
        document.querySelector('#explore-left').innerHTML= filtered;
    injectVideo();}
    document.querySelector("#button-categories-cleaning").addEventListener("click", function() {
    injectCleaning()})

//<!-- INJECT CATEGORY - CONSTRUCTIOn -->
    function injectConstruction(){
    shuffle(json)
        const filter = json.filter(cat => cat.category === 'Construction');
            let filtered = `<div class="video-item">`
            filter.slice(-20).forEach(function(val) {
              filtered += `<img data-id="${val.id}" data-category="${val.category}" data-video="${val.vd}"class="explore-video"src="${val.ph}">`})
              filtered += `</div>`
            document.querySelector('#explore-left').innerHTML= filtered;
    injectVideo();}
    document.querySelector("#button-categories-construction").addEventListener("click", function() {
    injectConstruction()})

//<!-- INJECT CATEGORY - PAINTING -->
    function injectPainting(){
            shuffle(json)
            const filter = json.filter(cat => cat.category === 'Painting');
                let filtered = `<div class="video-item">`
                filter.slice(-20).forEach(function(val) {
                  filtered += `<img data-id="${val.id}" data-category="${val.category}" data-video="${val.vd}"class="explore-video"src="${val.ph}">`})
                  filtered += `</div>`
                document.querySelector('#explore-left').innerHTML= filtered;
    injectVideo();}
    document.querySelector("#button-categories-painting").addEventListener("click", function() {
    injectPainting()})

//<!-- INJECT CATEGORY - PAINTING -->
    function injectPeople(){
              shuffle(json)
                const filter = json.filter(cat => cat.category === 'People');
                    let filtered = `<div class="video-item">`
                    filter.slice(-20).forEach(function(val) {
                      filtered += `<img data-id="${val.id}" data-category="${val.category}" data-video="${val.vd}"class="explore-video"src="${val.ph}">`})
                      filtered += `</div>`
                    document.querySelector('#explore-left').innerHTML= filtered;
    injectVideo();}
    document.querySelector("#button-categories-people").addEventListener("click", function() {
    injectPeople()})

}
})
