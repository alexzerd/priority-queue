const MaxHeap = require('./max-heap.js');

class PriorityQueue {
	constructor(maxSize) {
		if(maxSize){
			this.maxSize = maxSize;
		}else{
			this.maxSize = 30;
		}
		this.heap = new MaxHeap;
	}

	push(data, priority) {
		if(this.heap.size() >= this.maxSize){
			throw new SyntaxError("Size has been overflowed");
		}else{
			this.heap.push(data,priority);
		}
	}


	shift() {
		if(this.isEmpty()){
			throw new SyntaxError('This heap is empty.')
		}else{
			return this.heap.pop();
		}

	}

	size() {
		return this.heap.size();
	}

	isEmpty() {
		if(this.heap.size() === 0){
			return true;
		}else{
			return false;
		};
	}
}

module.exports = PriorityQueue;
