import constants from "../utils/constants";
import { randomBetween } from "../utils/functions";

const GameLoop = (entities, { touches, dispatch, events }) => {
	let head = entities.head;
	let food = entities.food;
	let tail = entities.tail;

	if (events.length) {
		for (let i = 0; i < events.length; i++) {
			if (events[i].type === "MOVE_UP" && head.yspeed !== 1) {
				head.yspeed = -1;
				head.xspeed = 0;
			} else if (events[i].type === "MOVE_DOWN" && head.yspeed !== -1) {
				head.yspeed = 1;
				head.xspeed = 0;
			} else if (events[i].type === "MOVE_LEFT" && head.xspeed !== 1) {
				head.xspeed = -1;
				head.yspeed = 0;
			} else if (events[i].type === "MOVE_RIGHT" && head.xspeed !== -1) {
				head.xspeed = 1;
				head.yspeed = 0;
			}
		}
	}

	head.nextMove -= 1;

	if (head.nextMove === 0) {
		head.nextMove = head.updateFrequency;

		if (
			head.position[0] + head.xspeed < 0 ||
			head.position[0] + head.xspeed >= constants.GRID_SIZE ||
			head.position[1] + head.yspeed < 0 ||
			head.position[1] + head.yspeed >= constants.GRID_SIZE
		) {
			dispatch({
				type: "GAME_OVER",
			});
		} else {
			tail.elements = [[head.position[0], head.position[1]]]
				.concat(tail.elements)
				.slice(0, -1);
			head.position[0] += head.xspeed;
			head.position[1] += head.yspeed;

			for (let i = 0; i < tail.elements.length; i++) {
				if (
					head.position[0] === tail.elements[i][0] &&
					head.position[1] === tail.elements[i][1]
				) {
					dispatch({
						type: "GAME_OVER",
					});
				}
			}

			if (
				head.position[0] === food.position[0] &&
				head.position[1] === food.position[1]
			) {
				tail.elements = [[food.position[0], food.position[1]]].concat(
					tail.elements
				);

				food.position[0] = randomBetween(0, constants.GRID_SIZE - 1);
				food.position[1] = randomBetween(0, constants.GRID_SIZE - 1);
			}
		}
	}

	return entities;
};

export default GameLoop;
