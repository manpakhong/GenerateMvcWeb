  $(document).ready(function () {
        try
        {
        	init();
//            switch (theme) {
//                case 'shinyblack':
//                    $($.find('.megamenu-ul li a:link')).css('color', '#fff');
//                    $($.find('.megamenu-ul li a:hover')).css('color', '#fff');
//                    $($.find('.megamenu-ul li a:visited')).css('color', '#fff');
//                    $($.find('.jqx-menuitem-header')).css('color', '#fff');
//                    break;
//                default:
//                    $($.find('.megamenu-ul li a:link')).css('color', '#2d628a');
//                    $($.find('.megamenu-ul li a:hover')).css('color', '#2d628a');
//                    $($.find('.megamenu-ul li a:visited')).css('color', '#2d628a');
//                    $($.find('.jqx-menuitem-header')).css('color', '#2d628a');
//                    break;
//            }

        }
        catch (error) {
        }
        // Create a jqxMenu
//        $("#jqxMenu").jqxMenu({ width:1300, height: '30px', autoOpen: true, autoCloseOnMouseLeave: false, showTopLevelArrows: true});
//        $("#jqxMenu").css('visibility', 'visible');
//        $(".buyonline").jqxLinkButton({ width: 150, height: 25});
//        $(".jqx-menu-search").jqxButton({ width: 60, height: 18});
    });
  
  
function init(){
	$('.db_table').select2({
		placeholder: 'Select tables',
		width: '1024px'
	});
}

function generate_code(e){
	var controlObj = e.target;
	var tableList = $('.db_table').select2('data');
	var tableListString = '';
	if (isObjectFound(tableList)){
		for (i=0; i < tableList.length; i++){
			var table = tableList[i];

			if (i > 0){
				tableListString += '&';
			}
			tableListString += 'tableName=' + table.id;

		}
	}
	doRequestToServlet(tableListString);
}

function doRequestToServlet(tableListString){
	var url = "GenerateMvcServlet?" + tableListString;

	var iframe = $('.generateMvcIframe');
	$(iframe).attr('src', url);
	//$(iframe).contentDocument.location.reload(true);
	iframe.src = iframe.src;
//	var win = window.open(url, '_blank');
	alert('Code generated! Compress file is downloaded!');

}