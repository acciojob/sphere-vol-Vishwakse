function volume_sphere(e) {
    event.preventDefault()
	const radius=Number(event.target.radius.value);
	const VolumeEle=event.target.volume;
	if(Number(radius)==NaN||radius<0){
		volume.value="NaN"
		raturn
	}
	VolumeEle.value=(4/3*Math.PI*(radius*radius*radius)).toFixed(4)
	
	
  
} 

window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;
