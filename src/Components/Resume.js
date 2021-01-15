import React, {  useState } from 'react';
import { Row, Col, Button } from 'antd';
import TextArea from 'antd/lib/input/TextArea';

const Translator =()=> {


const [lang1,setLang1]=useState('English');
const [lang2,setLang2]=useState('Hindi');  
const [lang1Value,setLang1Value]=useState('');
const [lang2Value,setLang2Value]=useState('');
const [type,setType]=useState(1);

const handelSwitch=()=>{
let val=lang1;
let val2=lang2;
setLang1(val2)
setLang2(val); 
type===1?setType(2):setType(1);
setLang1Value('');
setLang2Value('')
}

const handelTranslate=()=>{
  //Send Post Request
  }
    return (
      <section id="translator">
<div style={{fontSize:'30px',fontWeight:'600',textAlign:'center',marginTop:'40px',color:'red'}}>Translator</div>

<Row className='input-row'>

<Col xs={22} md={9} className='input-col' >
    <h3>{lang1}</h3>
<div className='input-container'>
<TextArea value={lang1Value} placeholder="Type Here" className='textarea-tranlator' />
</div>
</Col>
<Col offset={1} className='button-container'>
<Button className='switch' onClick={handelSwitch} >Switch</Button>

<Button className='translate' onClick={handelTranslate}>Translate</Button>
</Col>
<Col offset={1} xs={22} md={9} className='input-col'>
    <h3>{lang2}</h3>
<div className='input-container'>
<TextArea value={lang2Value} placeholder="Result" className='textarea-tranlator'/>
</div>
</Col>

  </Row>


     
   </section>
    );
  }

export default Translator;
