window.fishDeviceId=()=>{let id=localStorage.getItem('fish-device-v1');if(!id||! /^[0-9a-f-]{36}$/i.test(id)){id=crypto.randomUUID();localStorage.setItem('fish-device-v1',id);}return id;};
