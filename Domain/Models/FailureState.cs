namespace simulator_backend.Domain.Models
{
    public class FailureState : State
    {
        private readonly string Name;

        public FailureState(string Name)
        {
            this.Name = Name;
        }

        public string getName()
        {
            return this.Name;
        }

        public string getType()
        {
            return "failure";
        }
    }
}