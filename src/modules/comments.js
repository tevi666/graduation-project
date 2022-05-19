// export const comments = () => {
// 	const reviewsBlock = document.querySelector('#reviews .comments-container');

// 	//время для смены блоков с комментариями
// 	const timerInterval = 20000;

// 	let hideSlide = 0;
// 	let openSlide = 3;
// 	let openSlidesCount = 3;

// 	let interval;

// 	const getData = (url) => {
// 		return fetch(url)
// 			.then(res => res.json())
// 			.catch(error => console.log(error.message));
// 	};


// 	const render = (comments = []) => {
// 		const reviewColors = ['review-green', 'review-gray', 'review-orange'];

// 		const commentItems = [];

// 		comments.forEach((comment, index) => {
// 			const commentItem = document.createElement('div');
// 			commentItem.className = `row review-margin-bottom comment-item`;

// 			if (comment.id % 2 === 0) {
// 				commentItem.innerHTML = `					
// 						<div class="col-xs-9 col-sm-9">
// 							<div class="review-inner ${reviewColors[comment.id%reviewColors.length]} review-arrow review-arrow-right">
// 								<p class="text-normal">${comment.author}</p>
// 								<p>${comment.comment}</p>
// 							</div>
// 						</div>
// 						<div class="col-xs-3 col-sm-2">
// 							<div class="review-user">
// 								<img src="images/users/${comment.image || 'userpic.png'}" alt="user avatar" class="img-responsive avatar">
// 							</div>
// 						</div>					
// 				`;
// 			} else {
// 				commentItem.innerHTML = `				
// 						<div class="col-xs-3 col-sm-2">
// 							<div class="review-user">
// 								<img src="images/users/${comment.image || 'userpic.png'}" alt="user avatar" class="img-responsive avatar">
// 							</div>
// 						</div>
// 						<div class="col-xs-9 col-sm-9">
// 							<div class="review-inner ${reviewColors[comment.id%reviewColors.length]} review-arrow review-arrow-left">
// 								<p class="text-normal">${comment.author}</p>
// 								<p>${comment.comment}</p>
// 							</div>
// 						</div>					
// 				`;
// 			}

// 			//Блок для правильного отображения стрелки к цитате отзыва
// 			if (index < openSlidesCount) {
// 				reviewsBlock.append(commentItem);
// 				const arrowBlock = commentItem.querySelector('.review-arrow');
// 				arrowBlock.classList.add('rotate');
// 			}

// 			commentItems.push(commentItem);

// 		});

// 		startSlide(commentItems, timerInterval);

// 	};

// 	const toHideSlide = (elems, index) => {
// 		elems[index].remove();
// 	};

// 	const toOpenSlide = (elems, index) => {
// 		reviewsBlock.append(elems[index]);
// 	};


// 	const autoSlide = (slides) => {
// 		toHideSlide(slides, hideSlide);
// 		hideSlide++;
// 		if (hideSlide >= slides.length) {
// 			hideSlide = 0;
// 		}

// 		toOpenSlide(slides, openSlide);
// 		openSlide++;
// 		if (openSlide >= slides.length) {
// 			openSlide = 0;
// 		}
// 	};

// 	const startSlide = (slides, timer = 5000) => {
// 		interval = setInterval(() => {
// 			autoSlide(slides);
// 		}, timer);
// 	};

// 	reviewsBlock.innerHTML = `<div style="padding-left:33%;"><img src="images/spinner.svg" alt="spinner"></div>`;

// 	getData('/comments-json/comments.json').then(data => {
// 		//Добавил SetTimeout, чтобы нагляднее отобразить момент загрузки комментариев с "сервера"
// 		setTimeout(() => {
// 			try {
// 				reviewsBlock.innerHTML = '';
// 				render(data.comments);
// 			} catch (error) {
// 				console.log(error.message);
// 				reviewsBlock.innerHTML = `<div style="padding-left:33%;"><img src="images/spinner.svg" alt="spinner"></div>`;
// 			}
// 		}, 2000);
// 	}).catch(error => console.log(error.message));
// };