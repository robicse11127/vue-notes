<template>
	<div class="rs__notes-wrapper">
		<div class="rs__top-toolbar">
			<div class="rs__toolbar-title">
				RS Notes
				<span class="rs__action-icon material-symbols-sharp" id="rs__action-icon-add-note">edit_note</span>
			</div>
			<div class="rs__action-icons rs__justify-end">
				<span class="rs__action-icon material-symbols-sharp" id="rs__action-icon-list">format_list_bulleted</span>
				<span class="rs__action-icon material-symbols-sharp" id="rs__action-icon-grid">grid_view</span>
				<span class="rs__action-icon material-symbols-sharp" id="rs__action-icon-delete">delete</span>

				<span class="rs__action-icon material-symbols-sharp" id="rs__action-icon-search">search</span>
			</div>
		</div>
		<div class="rs__content-wrapper">
			<div class="rs__notes-sidebar">
				<h4 class="rs__sidebar-title">
					<span class="rs__sidebar-title-pinned-icon material-symbols-sharp">push_pin</span>
					Pinned Notes
				</h4>
				<ul class="rs__note-list rs__pinned-note-list">
					<li><p>Planning of this month learning</p></li>
					<li><p>Team lineup for tomorrow</p></li>
					<li><p>This needs to be done</p></li>
					<li><p>Important info about myself</p></li>
				</ul>
				<h4 class="rs__sidebar-title">
					<span class="rs__sidebar-title-note-icon material-symbols-sharp">notes</span>
					All Notes
				</h4>
				<ul class="rs__note-list rs__pinned-note-list">
					<li><p>Planning of this month learning</p></li>
					<li><p>Team lineup for tomorrow</p></li>
					<li><p>This needs to be done</p></li>
					<li><p>Important info about myself</p></li>
					<li><p>Planning of this month learning</p></li>
					<li><p>Team lineup for tomorrow</p></li>
					<li><p>This needs to be done</p></li>
					<li><p>Important info about myself</p></li>
					<li><p>Team lineup for tomorrow</p></li>
					<li><p>This needs to be done</p></li>
					<li><p>Important info about myself</p></li>
				</ul>
			</div>
			<div class="rs__notes-content">
				<input type="text" class="rs__input-title" placeholder="What is the note about...">
			</div>
		</div>
	</div>
</template>