class Node {

	constructor(data, priority) {
		this.data = data;
		this.priority = priority;
		this.parent = null;
		this.left = null;
		this.right = null;
	}

	appendChild(node) {

		if(!this.left){
			this.left = node, node.parent = this;
		}else if(this.left && !this.right){
			this.right = node, node.parent = this;
		}
	}

	removeChild(node) {
		var counter = 0;
		if(node == this.left){
			counter++;
			return this.left = null, node.parent = null;
		}else if(node == this.right && counter == 0){
			return this.right = null, node.parent = null;
		}else if(node != this.left && node != this.right){
			throw new SyntaxError("Passed node is not a child of this node");
		}
	}

	remove() {
		if(this.parent){
			this.parent.removeChild(this);
		};
	}

	swapWithParent() {
		if(!this.parent){return};
		if(this.parent.left === this){
			if(this.parent.right){
				this.parent.right.parent = this;
			};
		}else if(this.parent.right === this){
			if(this.parent.left){
				this.parent.left.parent = this;
			};
		};
		if(this.parent.parent === null){

		}else if(this.parent.parent.left === this.parent){
			if(this.parent.parent){
				this.parent.parent.left = this;
			}
		}else if(this.parent.parent.right === this.parent){
			if(this.parent.parent){
				this.parent.parent.right = this;
			}
		};
		if(this.left){
			this.left.parent = this.parent;
		}
		if(this.right){
			this.right.parent = this.parent;
		}

		let tempParent = this.parent,
			tempL = this.left,
			tempThis = this,
			tempR = this.right;

		let tempTParent = this.parent.parent,
			tempTL = this.parent.left,
			tempTR = this.parent.right;

		if(this.parent.left === this){
			this.left = tempParent;
			this.right = tempTR;
		}else if(this.parent.right === this){
			this.right = tempParent;
			this.left = tempTL;
		}
		this.parent.parent = tempThis;
		this.parent.left = tempL;
		this.parent.right = tempR;
		this.parent = tempTParent;
			}
	}
module.exports = Node;
