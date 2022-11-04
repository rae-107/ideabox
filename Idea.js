class Idea {
    constructor(title, body, id, star) {
        this.id = id || Date.now()
        this.title = title
        this.body = body
        this.star = star || false
    }

    updateIdea() {
        if (this.star === false) {
            this.star = true
        } else if (this.star === true) {
            this.star = false
        }
    }
}