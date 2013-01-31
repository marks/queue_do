var QueueDo = QueueDo || {};

QueueDo.loadQueueData = function() {
  $.each(["to_do", "in_progress", "complete", "incomplete"], function(i, v) {
    QueueDo[v] = ItemData.getItemsWithQueueId(v); 
  });
}
QueueDo.loadQueueData();

function itemMoveEvent(e, ui) {
  var $li = $(ui.item);
  var newQueueId = $li.parent().attr("value");
  var id = $li.attr("value");
  
  ItemData.updateItem(parseInt(id), {queue_id: newQueueId});
}

$(function(){
  $(".queue").sortable({
    connectWith: ".queue",
    receive: itemMoveEvent
  });

  $(".queue, .item").disableSelection();
});

