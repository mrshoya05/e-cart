import React from 'react'
import { card11, card22, card33 } from '../index';

function Cards() {
    return (
        <>

        <div className="cards-2 my-6">
            <div className="cards-2-b">
            <div class=" rounded overflow-hidden ">
   <img  src={card11} height={410} alt="" />
   
  <div class="custom-card-l">
    <div className='card-2-h'>PERFECT GIFT EVEN FOR
YOURSELF!</div>
    <p>
    Well suited as a gift set, these cotton towels
look so decorative and soft that we won’t judge
if you want to keep them for your family
and yourself.
    </p>
  </div>
</div>
</div>

<div className="cards-2-b">
<div class=" rounded overflow-hidden ">
   <img  src={card22}alt="" />
   
  <div class="px-2 py- custom-card-l">
    <div className='card-2-h'>USE FOR ANYTHING</div>
    <p>
    Perfect for your hands, face and  body…
and for your kids too! These towels’ softness is
ideal for toddler’s and baby’s delicate skin.
And the best part? They’re washable,
quick-dry towels that will last forever.
    </p>
  </div>
</div>
</div>
<div className="cards-2-b">
    <div class=" rounded overflow-hidden ">
   <img  src={card33}alt="" />
   
  <div class="custom-card-l">
    <div className='card-2-h'>EXTRA ABSORBENT</div>
    <p>
    Thanks to its natural properties, our 100%
Turkish Cotton Towels are super absorbent,
making the m perfect for  drying off in
any scenario. Lorem ipsum dolor sit amet consectetur.hello custom 
    </p>
  </div>
</div>
</div>
</div>


<div className="heading-2">
        <button>SHOW MORE </button>
      </div>

      <div className="heading-3">
        <p>Our Testimonials</p>
      </div>
  
  <div className="red-box-p">   
  <div className="red-box">
  <div className="red-box-c">
  The item is in a great quality and is shipped in the wonderful presentation box. The little brooches are
needed to be removed before washing. As far as softness goes, IMHO, I’ve seen softer ones. I would definitely would
by again if they had different color patterns. Not everyone is so big on pastel pink.<br />
-Valeriya

   </div>
   </div>
   </div>
   

        </>
    )
}

export default Cards
