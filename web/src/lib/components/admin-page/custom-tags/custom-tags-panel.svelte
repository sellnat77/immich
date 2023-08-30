<script lang="ts">
  import { locale } from '$lib/stores/preferences.store';
  import type { ServerStatsResponseDto } from '@api';
  import CameraIris from 'svelte-material-icons/CameraIris.svelte';
  import Memory from 'svelte-material-icons/Memory.svelte';
  import PlayCircle from 'svelte-material-icons/PlayCircle.svelte';
  import FullScreenModal from '$lib/components/shared-components/full-screen-modal.svelte';
  import AddTagsForm from '$lib/components/forms/add-tags-form.svelte';
  import Button from '$lib/components/elements/buttons/button.svelte';
  import { asByteUnitString, getBytesWithUnit } from '../../../utils/byte-units';

  let shouldShowAddTagsForm = false;

  const onTagsAdded = async () => {
    shouldShowAddTagsForm = false;
  };
</script>

<div class="flex flex-col gap-5">
  {#if shouldShowAddTagsForm}
    <FullScreenModal on:clickOutside={() => (shouldShowAddTagsForm = false)}>
      <AddTagsForm on:tag-added={onTagsAdded} on:cancel={() => (shouldShowAddTagsForm = false)} />
    </FullScreenModal>
  {/if}
  <table class="my-5 hidden w-full text-left sm:block">
    <thead
      class="mb-4 flex h-12 w-full rounded-md border bg-gray-50 text-immich-primary dark:border-immich-dark-gray dark:bg-immich-dark-gray dark:text-immich-dark-primary"
    >
      <tr class="flex w-full place-items-center">
        <th class="w-2/12 text-center text-sm font-medium">Exif Tag</th>
        <th class="w-8/12 text-center text-sm font-medium">Description</th>
        <th class="w-2/12 text-center text-sm font-medium">Action</th>
      </tr>
    </thead>
    <tbody class="block max-h-[320px] w-full overflow-y-auto rounded-md border dark:border-immich-dark-gray">
    </tbody>
  </table>
  <Button size="sm" on:click={() => (shouldShowAddTagsForm = true)}>Add Tags</Button>
</div>
