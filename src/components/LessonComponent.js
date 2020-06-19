import React from "react";
import UserService from "../services/UserService";
import FlashcardService from "../services/FlashcardService";
import DeckService from "../services/DeckService";

export default class LoginComponent extends React.Component {

    state = {
        words: [
            {
                english: "rouge",
                image: "https://media.wired.com/photos/5d082a4d3e969095d6f0bdda/master/pass/5d082a38c521b89313088f5d_culture%20-%20top%20art%20-%20Genius%20morse%20code%20Google_autoxauto_00001.jpg",
            },
            {
                english: "bleue",
                image: "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F28%2F2017%2F05%2Fblue0517.jpg&q=85",
            },
            {
                english: "verte",
                image: "https://vignette.wikia.nocookie.net/joke-battles/images/0/0e/Green.jpg/revision/latest?cb=20170111231844",
            },
            {
                english: "jaune",
                image: "https://s3-prod.adage.com/s3fs-public/styles/width_1024/public/YellowRectangle2_3x2.jpg",
            }
        ],
        currentQuestionNum: 0,
        answered: false,
        correct: true
    }

    removeWithoutImages(list) {
        for (let i = 0; i < list.length; i++) {
            if (list[i].image == null) {
                list.splice(i, 1); 
            }
        }
        return list; 
    }

    componentDidMount() {
        if (this.props.match.params.lessonId == "example") {
            console.log("is example");
            return
        }
        console.log("lessonId");
        console.log(FlashcardService.findFlashcardForDeck(this.props.match.params.lessonId));
        FlashcardService.findFlashcardForDeck(this.props.match.params.lessonId).then(
            res => {
                res = this.removeWithoutImages(res); 
                this.setState({ words: res }); 
            }
        )
    }

    newItem() {
        let nextNumber = this.state.currentQuestionNum;
        while (nextNumber == this.state.currentQuestionNum) {
            nextNumber = Math.floor(Math.random() * this.state.words.length);
        }
        this.setState({ currentQuestionNum: nextNumber });
        this.setState({ answered: false });
    }

    getRandomImages(number) {
        let images = [];
        images.push(this.state.words[this.state.currentQuestionNum].image);
        for (let i = 0; i < number - 1; i++) {
            let image = this.state.words[Math.floor(Math.random() * this.state.words.length)].image;
            if (images.includes(image)) {
                i--;
                continue;
            }
            images.push(image);
        }

        let correct = images.slice(0, 1);
        let toReplaceIndex = (Math.floor(Math.random() * images.length));
        let toReplace = images[toReplaceIndex];
        images[toReplaceIndex] = correct;
        images[0] = toReplace;

        return <div>
            {
                images.map(image => <button className="btn btn-light"
                    onClick={() => {
                        this.setState({ answered: true })
                        if (image == this.state.words[this.state.currentQuestionNum].image) {
                            this.setState({ correct: true });
                        } else {
                            this.setState({ correct: false });
                        }
                    }}>
                    <img src={image} style={{ 'width': '200px', height: '200px', padding: '10px' }} />
                </button>)
            }
        </div>
    }

    render() {
        return <div class="container">
            <h3>{this.state.words[this.state.currentQuestionNum].french}</h3>
            {this.getRandomImages(this.state.words.length)}
            {
                this.state.answered &&
                (this.state.correct && <h3 style={{ color: 'green' }}>Correct! Click next</h3>
                    || <h3 style={{ color: 'red' }}>Try again (click next)</h3>)
            }
            <br />
            <button className="btn btn-dark"
                onClick={() => this.newItem()}>
                Next</button>
        </div>

    }
};