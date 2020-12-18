import React, { useState } from 'react';
import InputComponent from './component/ptbh/input';
import ButtonComponent from './component/ptbh/button';
import Result from './component/ptbh/result';

const GiaiPTBH = () => {
  let [hsa,setHsa] = useState('');
  let [hsb,setHsb] = useState('');
  let [hsc,setHsc] = useState('');
  let [result, setResult] = useState(null);

  const changeInput = (event) => {
    let nameInput = event.target.name;
    let val = event.target.value;
    if(nameInput === 'hsa'){
      setHsa(val);
    } else if(nameInput === 'hsb') {
      setHsb(val);
    } else if(nameInput === 'hsc') {
      setHsc(val);
    }
  }

  const giaiPT = () => {
    let a = hsa;
    let b = hsb;
    let c = hsc;
    let chka = null;
    let chkb = null;
    let chkc = null;
    if(!isNaN(a) && a.length > 0){
      chka = true;
      a = parseFloat(a);
    } else {
      chka = false;
    }
    if(!isNaN(b) && b.length > 0){
      chkb = true;
      b = parseFloat(b);
    } else {
      chkb = false;
    }
    if(!isNaN(c) && c.length > 0){
      chkc = true;
      c = parseFloat(c);
    } else {
      chkc = false;
    }

    if(chka && chkb && chkc){
      // thuc su di tim nghiem
      let delta = (b*b) - (4*a*c);
      if(delta < 0){
        setResult(`Phuong trinh vo nghiem`);
      } else if(delta == 0) {
        setResult(`Phuong trinh co nghiem kep: ${-b/(2*a)}`);
      } else {
        let x1 = (-b + Math.sqrt(delta)) / (2*a);
        let x2 = (-b - Math.sqrt(delta)) / (2*a);
        setResult(`Phuong trinh co 2 nghiem phan biet x1 = ${x1} va x2 = ${x2}`);
      }
    } else {
      setResult(`Vui long nhap so`);
    }
  }

  return(
    <>
      <h2>Giai phuong trinh bac hai</h2>
      <p>Nhap he so a</p>
      <InputComponent change={changeInput} type="text" name="hsa" />
      <p>Nhap he so b</p>
      <InputComponent change={changeInput} type="text" name="hsb" />
      <p>Nhap he so c</p>
      <InputComponent change={changeInput} type="text" name="hsc" />
      <br/>
      <ButtonComponent click={giaiPT} type="button">Giai PT</ButtonComponent>
      <Result result={result} />
    </>
  );
}
export default GiaiPTBH;