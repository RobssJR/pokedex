import { StringFunctions } from '../../Core/Util/StringFunctions';

describe("string functions", () => {
  test("capitalize", () => {
    const value = "pokemon"
    let valueCapitalize = StringFunctions.Capitalize(value)
    expect(valueCapitalize).toBe("Pokemon")
  })
})

