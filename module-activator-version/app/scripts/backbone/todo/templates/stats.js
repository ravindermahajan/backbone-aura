{{if (total) }}
<span class="todo-count">
	<span class="number">${ remaining }</span>
	<span class="word">${ remaining == 1 ? 'item' : 'items' }</span> left.
</span>
{{/if}}
{{if (done) }}
<span class="todo-clear">
	<a href="#">
		Clear <span class="number-done">${ done }</span>
		completed <span class="word-done">${ done == 1 ? 'item' : 'items' }</span>
	</a>
</span>
{{/if}}
