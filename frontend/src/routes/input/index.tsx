import { component$ } from "@builder.io/qwik";
import { Form } from "@builder.io/qwik-city";



export default component$(() => {
  return (
    <div class="flex items-center justify-center">
      <div class="text-center">
        <h3 class="my-5">入力</h3>
        <Form>
          <div class="grid grid-rows-2 gap-5">
            {/* radio button */}
            <div class="grid justify-items-start space-y-2">
              <h5>収支</h5>
              <div class="flex gap-x-6">
                <div class="flex">
                  <input
                    type="radio"
                    name="hs-radio-group"
                    class="mt-0.5 shrink-0 rounded-full border-gray-200 text-blue-600 focus:ring-blue-500 disabled:pointer-events-none disabled:opacity-50"
                    id="hs-radio-group-1"
                  />
                  <label
                    for="hs-radio-group-1"
                    class="ms-2 text-sm text-gray-500"
                  >
                    支出
                  </label>
                </div>

                <div class="flex">
                  <input
                    type="radio"
                    name="hs-radio-group"
                    class="mt-0.5 shrink-0 rounded-full border-gray-200 text-blue-600 focus:ring-blue-500 disabled:pointer-events-none disabled:opacity-50"
                    id="hs-radio-group-2"
                  />
                  <label
                    for="hs-radio-group-2"
                    class="ms-2 text-sm text-gray-500"
                  >
                    収入
                  </label>
                </div>
              </div>
            </div>

            <div class="grid justify-items-start space-y-2">
              <h5>日付</h5>
              <input
                type="date"
                class="w-full rounded-md border-gray-200 text-gray-900 focus:ring-blue-500"
              />
            </div>

            <div class="grid justify-items-start space-y-2">
              <h5>カテゴリ</h5>
              <select class="w-full rounded-md border-gray-200 text-gray-900 focus:ring-blue-500">
                <option value="option1">Option 1</option>
                <option value="option2">Option 2</option>
                <option value="option3">Option 3</option>
              </select>
            </div>

            <div class="grid justify-items-start space-y-2">
              <h5>金額</h5>
              <input
                type="number"
                class="w-full rounded-md border-gray-200 text-gray-900 focus:ring-blue-500"
              />
            </div>

            <div class="grid justify-items-start space-y-2">
              <h5>メモ</h5>
              <input
                type="text"
                class="w-full rounded-md border-gray-200 text-gray-900 focus:ring-blue-500"
              />
            </div>
          </div>
        </Form>
      </div>
    </div>
  );
});
