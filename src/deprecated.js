import { useBlockProps, RichText } from '@wordpress/block-editor'
import {createBlock} from '@wordpress/blocks'

// This is the deprecated code from the 1.0.0 save.js, attributes and use of migrate because the text attribute was replace with content
const v1 = {
	'attributes': {
		'text': {
			'type': 'string',
			'default': 'Some text here!'
		}
	},
	migrate ({ text }) {
		return {
			content: text,
		}
	},
	save ({ attributes }) {
		return (
			<div {...useBlockProps.save()}>
				<RichText.Content
					tagName="p"
					value={attributes.text}
				/>
			</div>
		)
	}
}

// This is the deprecated code from the 1.1.0 save.js, attributes and use of migrate for innerBlocks
const v2 = {
	'attributes': {
		'content': {
			'type': 'string',
			'default': 'Some content here!'
		}
	},
	migrate( attributes, innerBlocks ) {
		const { content, ...restAttributes } = attributes;

		return [
			restAttributes,
			[
				createBlock( 'core/paragraph', {
					content: attributes.content,
				} ),
				...innerBlocks,
			],
		];
	},
	save ({ attributes }) {
		return (
			<div {...useBlockProps.save()}>
				<RichText.Content
					tagName="div"
					value={attributes.content}
				/>
			</div>
		)
	}
}

export default [v2, v1]
