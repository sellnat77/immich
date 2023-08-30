<script lang="ts">
  import { api } from '@api';
  import { createEventDispatcher } from 'svelte';
  import ImmichLogo from '../shared-components/immich-logo.svelte';
  import { notificationController, NotificationType } from '../shared-components/notification/notification';
  import Button from '../elements/buttons/button.svelte';

  const dispatch = createEventDispatcher();
  let newTag = null;
  let tagDescription = null;

  const isAddingTags = false;

  async function addTags(event: SubmitEvent) {
    console.log(newTag);
    console.log(tagDescription);
    dispatch('tag-added');
  }
</script>

<div
  class="max-h-screen w-[500px] max-w-[95vw] overflow-y-scroll rounded-3xl border bg-immich-bg p-4 py-8 shadow-sm dark:border-immich-dark-gray dark:bg-immich-dark-gray dark:text-immich-dark-fg"
>
  <div class="flex flex-col place-content-center place-items-center gap-4 px-4">
    <ImmichLogo class="text-center" height="100" width="100" />
    <h1 class="text-2xl font-medium text-immich-primary dark:text-immich-dark-primary">Add Tags</h1>
    <p class="rounded-md border p-4 font-mono text-sm text-gray-600 dark:border-immich-dark-bg dark:text-gray-300">
      Something something add a new custom exif tag or tags.
    </p>
  </div>

  <form on:submit|preventDefault={addTags} autocomplete="off">
    <div class="m-4 flex flex-col gap-2">
      <label class="immich-form-label" for="tag">Tag</label>
      <input class="immich-form-input" id="tag" name="tag" type="text" required bind:value={newTag}/>
    </div>

    <div class="m-4 flex flex-col gap-2">
      <label class="immich-form-label" for="description">Description</label>
      <input class="immich-form-input" id="description" name="description" type="text" bind:value={tagDescription}/>
    </div>

    <div class="flex w-full gap-4 p-4">
      <Button color="gray" fullwidth on:click={() => dispatch('cancel')}>Cancel</Button>
      <Button type="submit" disabled={isAddingTags} fullwidth>Add Tags</Button>
    </div>
  </form>
</div>
