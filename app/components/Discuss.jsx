import React from 'react';
import Note from './Note';
import PreIntro from './Pre-Intro.jsx';

export default class Discuss extends React.Component {
	constructor(props) {
		super(props);
		this.state = {section: 1};
		this.onNextClick = this.onNextClick.bind(this);
		this.onBackClick = this.onBackClick.bind(this);

	}

	onNextClick() {
		this.setState({
			section: this.state.section + 1
		});
	}

	onBackClick() {
		this.setState({
			section: this.state.section - 1
		});
	}

	GreyArrow = (<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
	<rect width="32" height="32" fill="#E5E5E5"/>
	<rect width="1184" height="989" transform="translate(-360 -486)" fill="#E6F0F4"/>
	<path d="M-344 -303H808V441H-344V-303Z" fill="white"/>
	<circle cx="16" cy="16" r="15.5" stroke="#9FC5D5"/>
	<path d="M20.244 22.097C20.6852 22.5107 20.6852 23.2278 20.2716 23.669C20.051 23.8897 19.7753 24 19.472 24C19.1963 24 18.9205 23.8897 18.6999 23.6966L11.5311 16.8016C11.3105 16.5809 11.2002 16.3051 11.2002 16.0018C11.2002 15.6984 11.3105 15.4226 11.5311 15.2019L18.6999 8.30691C19.1411 7.89321 19.8304 7.89321 20.2716 8.33449C20.6852 8.77577 20.6852 9.46528 20.244 9.90656L13.9023 16.0018L20.244 22.097Z" fill="#A1BFCB"/>
	</svg>
	);

	Arrow = (
		<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
		<rect width="32" height="32" fill="#E5E5E5"/>
		<rect width="1184" height="989" transform="translate(-793 -486)" fill="#E6F0F4"/>
		<path d="M-777 -303H375V441H-777V-303Z" fill="white"/>
		<circle cx="16" cy="16" r="15.5" stroke="#9FC5D5"/>
		<path d="M20.5784 16.0018C20.5784 16.3051 20.4682 16.5809 20.2476 16.8016L13.0787 23.6966C12.8581 23.8897 12.5824 24 12.3066 24C12.0033 24 11.7276 23.8897 11.507 23.669C11.0934 23.2278 11.0934 22.5383 11.5346 22.097L17.8763 16.0018L11.5346 9.90656C11.0934 9.49286 11.0934 8.77577 11.507 8.33449C11.9206 7.89321 12.6375 7.89321 13.0787 8.30691L20.2476 15.2019C20.4682 15.4226 20.5784 15.6984 20.5784 16.0018Z" fill="#244451"/>
		</svg>
	);


		render() {
			const {boardId, title} = this.props;

			let notes = JSON.parse(localStorage.getItem('state')).notes;
			let leftButton;
			let rightButton;
			if(this.state.section == 1){
				leftButton = <div className='arrow'>{this.GreyArrow}</div>;
			} else {
				leftButton = <div className='arrow upsidedown' onClick={this.onBackClick}>{this.Arrow}</div>;
			}
			if(this.state.section == notes.length){
				rightButton = <div className='arrow upsidedown'>{this.GreyArrow}</div>;
			} else {
				rightButton = <div className='arrow' onClick={this.onNextClick}>{this.Arrow}</div>;
			}
			let note = notes[this.state.section-1];
			if(!note){
				return null;
			}
			return (
				<div className='daddy'>
					{leftButton}
					<div className='mommy'>
						<h1>Topic #{this.state.section}</h1>
						<button className='btn-primary'>{notes.length + 2 - this.state.section} Votes</button>
						<li className='note noteRisks'>
							<div className='note-wrapper'>
								<span className='card-display'>{note.task} </span>
							</div>
							<div className="pretend-menu">
								<svg width="9" height="2" viewBox="0 0 9 2" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path d="M1.37364 1.94769C1.14899 1.94769 0.911857 1.84781 0.74961 1.68552C0.587364 1.52323 0.5 1.29853 0.5 1.07382C0.5 0.849112 0.599844 0.624402 0.74961 0.449628C0.911857 0.287338 1.13651 0.199951 1.37364 0.199951C1.59828 0.199951 1.82294 0.299822 1.98518 0.449628C2.14743 0.611918 2.24727 0.836628 2.24727 1.07382C2.24727 1.29853 2.14743 1.52323 1.98518 1.68552C1.83542 1.86029 1.59828 1.94769 1.37364 1.94769ZM5.11779 1.69801C5.28003 1.53572 5.37987 1.31103 5.37987 1.08632C5.37987 0.861608 5.28003 0.636898 5.11779 0.462124C4.95554 0.299834 4.73089 0.212447 4.50624 0.212447C4.28159 0.212447 4.04446 0.312318 3.88221 0.462124C3.71997 0.624414 3.6326 0.849124 3.6326 1.08632C3.6326 1.31103 3.73245 1.53572 3.88221 1.69801C4.04446 1.8603 4.26911 1.96019 4.50624 1.96019C4.71841 1.9477 4.95554 1.8603 5.11779 1.69801ZM8.23791 1.69801C8.40016 1.53572 8.5 1.31103 8.5 1.08632C8.5 0.861608 8.40016 0.636898 8.23791 0.462124C8.07567 0.299834 7.85101 0.212447 7.62636 0.212447C7.40172 0.212447 7.16459 0.312318 7.00234 0.462124C6.84009 0.624414 6.75273 0.849124 6.75273 1.08632C6.75273 1.31103 6.85257 1.53572 7.00234 1.69801C7.16459 1.8603 7.38924 1.96019 7.62636 1.96019C7.83853 1.9477 8.07567 1.8603 8.23791 1.69801Z" fill="#244451"/>
								</svg>
							</div>
						</li>
						<button className='btn-secondary'>Create an action item</button>
						<div>{this.state.section}/{notes.length} Topics</div>
					</div>
					{rightButton}
				</div>
			)
		
		}
	}
