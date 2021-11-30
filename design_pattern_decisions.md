# Inter-Contract Execution (Calling functions in external contracts) Inter-Contract Execution, Part 1 and Part 2

We used AngelToken to call on Bless Token when getting rewards for holding the NFTs. This function calls to mint yield token to the user.

# Access Control Design Patterns (Restricting access to certain functions using things like Ownable, Role-based Control) Access Control Design Patterns

There are some functions that can only be called by the owner of the angelGrace contract like withdraw, which is used to draw out eth in the contract from the mint.
