var __helper_data__ = {},HelperButton = {};
HelperButton.ui = function (a) {
	var script = document.createElement('script');
	script.setAttribute('src','helper/helper.js');
	document.head.appendChild(script);

	__helper_data__.name=a.name;
	__helper_data__.element=a.element;
	__helper_data__.participants=a.participants;
	console.log(__helper_data__);

	var currentElement = document.getElementById(__helper_data__.element);
	console.log(currentElement);               

	//currentElement.innerHTML = '<nav class="menu"><input type="checkbox" href="#" class="menu-open" name="menu-open" id="menu-open" /><label class="menu-open-button" for="menu-open"> <span class="lines line-1"></span> <span class="lines line-2"></span> <span class="lines line-3"></span> </label><a href="#" class="menu-item item-1"> <i class="fa fa-anchor"></i> </a> <a href="#" class="menu-item item-2"> <i class="fa fa-coffee"></i> </a> <a href="#" class="menu-item item-3"> <i class="fa fa-heart"></i> </a> <a href="#" class="menu-item item-4"> <i class="fa fa-microphone"></i> </a> <a href="#" class="menu-item item-5"> <i class="fa fa-star"></i> </a> <a href="#" class="menu-item item-6"> <i class="fa fa-diamond"></i> </a> </nav>';
	currentElement.innerHTML = '<nav class="menu"><input type="checkbox" href="#" class="menu-open" name="menu-open" id="menu-open" /><label class="menu-open-button" for="menu-open"> <span class="lines line-1"></span> <span class="lines line-2"></span> <span class="lines line-3"></span> </label> \
            <a href="#" id="_openVideoBox_" class="menu-item item-1"> <i class="fa fa-video-camera" aria-hidden="true" style="margin-top: 18px;"></i> </a> \
            <a href="#" id="_openCameraBox_" class="menu-item item-4"> <i class="fa fa-camera" aria-hidden="true" style="margin-top: 18px;"></i> </a> \
            <a href="#" id="_openTicketBox_" class="menu-item item-2"> <i class="fa fa-list-alt" aria-hidden="true" style="margin-top: 18px;"></i> </a> \
            <a href="#" id="_openChatBox_" class="menu-item item-3"> <i class="fa fa-commenting" aria-hidden="true" style="margin-top: 18px;"></i> </a> \
        </nav>';
}