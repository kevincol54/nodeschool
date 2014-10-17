var _ = require('lodash');

var worker = function(collection){
	return _.forEach(collection, function(item){

		if(item.population > 1){
			return item.size = 'big';
		}
		else if(item.population < 0.5){
			return item.size = 'small';
		}
		else{
			return item.size = 'med';
		}

	});
};


module.exports = worker;