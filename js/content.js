
window.onload = function (ev) {
	var building_blocks = [
							"voluntary-periodic-check", "voluntary-granular-visibility", "voluntary-sharing-hops", "voluntary-request-isolation",
							"informed-account-summary", "informed-audience-intel", 
							"revertible-effcient-express", "revertible-cascading-revert", 
							"specific-social-circle", "specific-topic-inference", "specific-group-policies",
							"unburdensome-timeboxing", "unburdensome-annotation", "unburdensome-rate-limit"
	]
	for (let k=0; k<building_blocks.length; k++){
		console.log(building_blocks[k])
		document.getElementById(building_blocks[k]).addEventListener("click", function (){
			colorCells(building_blocks[k])
			console.log(building_blocks[k])
		});
	}
}

function colorCells(building_block_name){
	removeColor();
	var cells = document.getElementsByClassName(building_block_name)
	for (let i=0; i<cells.length; i++){
		cells[i].classList.add("table-info")
	}
	document.getElementById("feature-table").scrollIntoView()
}

function removeColor(){
	var rows = document.getElementById("feature-table").rows
	for (let i=0; i<rows.length; i++){
		for(let j=0; j<rows[i].cells.length; j++){
			rows[i].cells[j].classList.remove("table-info")
		}
	}
}