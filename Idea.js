class Idea {
    constructor(title, body, id) {
        this.id = id || Date.now()
        this.title = title
        this.body = body
        this.star = false
    }

    updateIdea() {
        if (!this.star) {
            return this.star = true
        }
        this.star = false
    }
}